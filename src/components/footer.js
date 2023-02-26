import React from "react";

export default function Footer({origin}) {
  // const [typeClass,setTypeClass] = useState("");
  var typeClass = "";
  console.log(origin)
  console.log(origin === undefined)
  if(origin === undefined){
    typeClass = "footer-div";
  }else if(origin === "about"){
    typeClass = "about-footer-div";
  }
  return (
    <footer className={typeClass}>
        <p className="footer-text">Ⓒ 2022 #VANLIFE</p>
    </footer>
  );
}
