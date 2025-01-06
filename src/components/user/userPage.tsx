import NamedSectionForElements from "@/elements/sections/namedSectionForElements";
import NO_PHOTO_IMAGE from "@/assets/images/noPhoto.jpg";
import TextControl from "@/elements/controls/text";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { authenticate } from "@/redux/features/authUserSlice";
import ChangePassword from "@/components/user/changePassword";
import * as styles from "./userPage.m.scss";

export default function UserPage() {
  const [image, setImage] = useState(NO_PHOTO_IMAGE);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    if (e.target.files?.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authenticate("test"));
  }, []);

  return (
    <section className={styles.section}>
      <NamedSectionForElements name="User page">
        <div className={styles.imageContainer}>
          <img src={image} className={styles.img} alt="User avatar" />
          <label htmlFor="changePhotoBtn" className={styles.fileUploadLabel}>
            Change photo
            <input id="changePhotoBtn" className={styles.inputUpload} type="file" accept="image/*" onChange={handleChange} />
          </label>
        </div>
        <div className={styles.inputsContainer}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Username</label>
          <TextControl name="username" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Address delivery
            <TextControl name="addressDelivery" />
          </label>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Phone number
            <TextControl name="phoneNumber" />
          </label>
        </div>
        <div className={styles.buttonHolder}>
          <button className={styles.button} type="button">
            Save profile
          </button>
          <button id="changePasswordButton" className={styles.button} type="button">
            Change password
          </button>
          <ChangePassword />
        </div>
      </NamedSectionForElements>
    </section>
  );
}
