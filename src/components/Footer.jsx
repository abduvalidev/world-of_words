import { useEffect } from "react";

function Footer({ apiUrl }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API so‘rovi props orqali yuborilgan URL bilan bajariladi
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Xato: ${response.status}`);
        }
        const result = await response.json();
        console.log("API dan kelgan ma'lumot:", result);
      } catch (error) {
        console.error("So‘rov xatosi:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return <div>Footer</div>;
}

export default Footer;
