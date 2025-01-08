import NamedSectionForElements from "@/elements/sections/namedSectionForElements";
import NO_PHOTO_IMAGE from "@/assets/images/noPhoto.jpg";
import TextControl from "@/elements/controls/text";
import { useEffect, useState } from "react";
import ChangePasswordModal from "@/components/user/changePasswordModal";
import Form from "@/elements/form";
import TextArea from "@/elements/controls/textArea";
import { getUser, saveProfile } from "@/api/profile";
import UserInfo from "@/types/user.types";
import NotifyElement from "@/elements/controls/notify";
import * as styles from "./userPage.m.scss";

export default function UserPage() {
  const [image, setImage] = useState(NO_PHOTO_IMAGE);
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [model, setModel] = useState<UserInfo>({
    username: "test",
    addressDelivery: "test",
    phoneNumber: "000000000000",
    profilePicture: NO_PHOTO_IMAGE,
  });

  useEffect(() => {
    getUser()
      .then((data) => {
        setModel(data);
        setLoading(false);
        setImage(data.profilePicture);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handlePictureChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImage(url);
    }
  }

  const handleSubmit = (e: WUP.Form.EventMap["$submit"]) => {
    const updatedInfo: UserInfo = {
      username: e.detail.model.username,
      addressDelivery: e.detail.model.addressDelivery,
      phoneNumber: e.detail.model.phoneNumber,
      profilePicture: image,
    };
    console.log(updatedInfo);
    saveProfile(updatedInfo)
      .then((success) => {
        if (success) {
          setNotify(true);
          setTimeout(() => setNotify(false), 3000);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className={styles.section}>
      <NamedSectionForElements name="User page">
        {loading ? (
          <p> Loading</p>
        ) : (
          <>
            <div className={styles.imageContainer}>
              <img src={image} className={styles.img} alt="User avatar" />
              <label htmlFor="changePhotoBtn" className={styles.fileUploadLabel}>
                Change photo
                <input id="changePhotoBtn" className={styles.inputUpload} type="file" accept="image/*" onChange={handlePictureChange} />
              </label>
            </div>
            <Form onSubmit={handleSubmit}>
              <div className={styles.styleContainer}>
                <div className={styles.inputsContainer}>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className={styles.label}>Username*</label>
                  <TextControl name="username" label="" value={model.username} validations={{ required: true }} />

                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className={styles.label}>Address delivery*</label>
                  <TextArea name="addressDelivery" label="" value={model.addressDelivery} validations={{ required: true }} />

                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label className={styles.label}>Phone number*</label>
                  <TextControl
                    name="phoneNumber"
                    label=""
                    value={model.phoneNumber}
                    validations={{ required: true }}
                    mask="+(000)00-000-0000"
                  />
                </div>
                <div className={styles.buttonHolder}>
                  <button className={styles.button} type="submit">
                    Save profile
                  </button>

                  <button id="changePasswordButton" className={styles.button} type="button">
                    Change password
                  </button>
                  <ChangePasswordModal />
                </div>
              </div>
            </Form>
            <NotifyElement openElement={notify} title="Update succeeded" />
          </>
        )}
      </NamedSectionForElements>
    </section>
  );
}
