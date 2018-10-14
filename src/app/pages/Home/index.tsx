import * as React from 'react';
import { HeroBanner } from './HeroBanner';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { ToastContainer, toast } from 'react-toastify';
import * as Style from './style.css';
import { Link } from 'react-router-dom';

const Msg = ({ closeToast = null }) => (
  <div className={Style.customtoast}>
    <Link className={Style.newslink} to="./news">
      Important new information! >> Click here!{' '}
    </Link>
  </div>
);

export class Home extends React.Component {
  timeout;

  reopenToast() {
    // this.timeout = setTimeout(() => {
    //   this.reopenToast();
    // }, 8000);
    toast(<Msg />, {
      type: 'error',
      position: toast.POSITION.TOP_CENTER,
      className: Style.toastinfo,
      autoClose: false
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentWillMount() {
    this.reopenToast();
  }

  render() {
    return (
      <Page>
        <ToastContainer className={Style.toastcontainer} />
        <HeroBanner />
        <Footer alternate />
      </Page>
    );
  }
}
