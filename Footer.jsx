import React from "react";

function Footer()
{
  var cuurentyear =new Date().getFullYear();
return (
<footer>
<p>Copyright @ {cuurentyear} </p>
</footer>
);
      }
export default Footer;