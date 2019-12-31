import React from 'react';
import './terms.css';

const Terms = () => {
  return(
    <div className="terms__content">
      <h2 className="header__terms">Terms and Condition</h2>
      <div className="">Banka is a light weight banking application designed to support small scale to medium banking
        operations.
        <div className="sub__content__terms">Terms and Condition includes</div> 
      </div>
      <ul className="items__group__terms">
      <li className="list__item__terms">
      Open source refers to software that's free to the public.
      More specifically, the software's source code is available to the
      public to use and/or modify. You can use the program as is or modify its source code to suit your needs, without fear of legal reprisals.
      Take it home-it's yours; it's free! Technically, open source refers to a great deal more than free stuff. 
      It defines copyright, licensing, domain, and consumer issues for this special software niche
      </li>
      <li className="list__item__terms">credits for the  Above terms goes to <a href="https://www.techrepublic.com/blog/10-things/10-terms-and-concepts-related-to-open-source/"><b>techrepublic</b></a></li>

      </ul>
    </div>
  ) 
}
export default Terms;