import { useEffect, useState } from "react";

export default function useContentManagement<Type>() {
  const [content, setContent] = useState<Type[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (content.length > 0) {
      setLoading(false);
    }
  }, [content]);
  return { content, setContent, loading, setLoading };
}
