import Skeleton from 'react-loading-skeleton';
import { APP_LOGO_FULL, SKELETON_BASE_COLOR, SKELETON_HEIGHT_20, SKELETON_SHINE_COLOR, SKELETON_WIDTH_300 } from '../../config';
import './style.css';

const DesterFooter = ({ homeResult }) => {
    return (
        <footer className="text-center text-lg-start bg-custom text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href={homeResult.site_contact_id_facebook} className="me-4 text-reset">
              <i className="bi bi-facebook"></i>
              </a>
              <a href={homeResult.site_contact_id_twitter} className="me-4 text-reset">
              <i className="bi bi-twitter"></i>
              </a>
              <a href={homeResult.site_contact_id_instagram} className="me-4 text-reset">
              <i className="bi bi-instagram"></i>
              </a>
              <a href={homeResult.site_contact_id_discord} className="me-4 text-reset">
              <i className="bi bi-discord"></i>
              </a>
            </div>
          </section>
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <img src={APP_LOGO_FULL} alt="" width="200"/>
                  </h6>
                  <p>{homeResult.site_description}</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4"> Genres </h6>
                  <p>
                    <a href="#!" className="text-reset">Action</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Sci-Fi</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Family</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Animation</a>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4"> Category </h6>
                  <p>
                    <a href="/collections/61c1c6e2bf9fc4a60e2ef55d?collection_name=kdrama" className="text-reset">K-Drama</a>
                  </p>
                  <p>
                    <a href="/collections/61c1d252c3ef41a9ec79a7d5?collection_name=anime" className="text-reset">Anime</a>
                  </p>
                  <p>
                    <a href="/collections/61c1d27fc3ef41a9ec79a7d6?collection_name=cdrama" className="text-reset">C-Drama</a>
                  </p>
                  <p>
                    <a href="/collections/61c1c6cabf9fc4a60e2ef55c?collection_name=netflix" className="text-reset">Netflix</a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4"> Contact </h6>
                  <p>
                  <i className="bi bi-house-fill"></i> {homeResult.site_contact_address}
                  </p>
                  <p>
                  <i className="bi bi-envelope-fill"></i> {homeResult.site_contact_mail}
                  </p>
                  <p>
                  <i className="bi bi-telephone-fill"></i> + {homeResult.site_contact_number}
                  </p>
                </div>
              </div>
            </div>
          </section>
        <div className="d-flex justify-content-between p-4">
          <div className="text-start">Privacy Policy</div> 
          <div className="text-center"> © 2021 Copyright :
          <a className="text-reset fw-bold" href={homeResult.site_url}> {homeResult.site_name}</a>
          </div>
          <div className="text-end">Terms & Conditions</div>
          </div>
      </footer>
    )
};

const DesterFooterPlaceHolder = () => {
  return (
      <footer className="text-center text-lg-start bg-custom text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4">
          <div className="me-5 d-none d-lg-block">
            <span><Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} height={SKELETON_HEIGHT_20} width={SKELETON_WIDTH_300} /></span>
          </div>
          <div className="d-flex placeholder-footer">
            <a href="#!" className="me-4 text-reset">
            <Skeleton circle baseColor="#162B45" highlightColor="#232f57" />
            </a>
            <a href="#!" className="me-4 text-reset">
            <Skeleton circle baseColor="#162B45" highlightColor="#232f57" />
            </a>
            <a href="#!" className="me-4 text-reset">
            <Skeleton circle baseColor="#162B45" highlightColor="#232f57" />
            </a>
            <a href="#!" className="me-4 text-reset">
            <Skeleton circle baseColor="#162B45" highlightColor="#232f57" />
            </a>
          </div>
        </section>
    </footer>
  )
};

export { DesterFooter, DesterFooterPlaceHolder }
