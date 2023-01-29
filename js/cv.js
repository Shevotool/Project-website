const documentLoaded = () => {
  const btnCrearPdf = document.querySelector("#btnCrearPdf");
  if (!btnCrearPdf) return;

  const handleBtnClick = async () => {
    const cv = document.getElementById("cv-pdf");
    const options = {
      margin: 1,
      filename: "andres-gonzalez-cv.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 3,
        letterRendering: true,
      },
      jsPDF: {
        unit: "in",
        format: "a3",
        orientation: "portrait",
      },
    };

    try {
      await html2pdf().set(options).from(cv).save();
    } catch (error) {
      console.error(error);
    }
  };

  btnCrearPdf.addEventListener("click", handleBtnClick);
};

document.addEventListener("DOMContentLoaded", documentLoaded);
