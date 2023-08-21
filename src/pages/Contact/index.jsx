import React from 'react';
import { PageTitle } from '@/components';
import EmailIcon from '@/assets/icons/email.svg';
import AddressIcon from '@/assets/icons/address.svg';
import TelIcon from '@/assets/icons/tel.svg';
import './style.less';

const ContactPage = () => {
  return (
    <div class="contact-page">
      <PageTitle title="商务合作" />
      <div className="con">
        <div className="img-blk"></div>
        <div className="text-blk">
          <h3>与我们的总部联系</h3>
          <p>
            <img class="page-icon" src={EmailIcon} />
            <a>xxxxxxxxxxxxx@foxmail.com</a>
          </p>
          <p>
            <img class="page-icon" src={AddressIcon} />
            北京市北七家镇xxx街xx号
          </p>
          <p>
            <img class="page-icon" src={TelIcon} />
            <span>联系电话</span> 021-59xxxxxx
          </p>

          <h3 className="mt">上海</h3>
          <p>
            <img class="page-icon" src={AddressIcon} />
            上海市浦东新区xx街xx号
          </p>
          <p>
            <img class="page-icon" src={TelIcon} />
            <span>联系电话</span> 021-59xxxxxx
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
