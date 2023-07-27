import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="max-width-footer">
          <div className="row mx-4">
            <div className="col-lg-6 mt-4">
              <div className="footer-col-1">
                <div className="footer-title">Subscribe Our Newsletter For More Update</div>
                <div className="footer-desc mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis aut culpa voluptas sapiente delectus veniam vel dolor reprehenderit magni.</div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 d-flex flex-column justify-content-center align-items-center">
              <div>
                <div className="footer-input">
                  <input className="py-2 px-5" type="text" placeholder="Enter Your Email" />
                </div>
                <div className="footer-button mt-4 mb-1">
                  <button className="px-3 py-2">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

// <div class="d-flex justify-content-start">...</div>
// <div class="d-flex justify-content-end">...</div>
// <div class="d-flex justify-content-center">...</div>
// <div class="d-flex justify-content-between">...</div>
// <div class="d-flex justify-content-around">...</div>


// <div class="d-flex align-items-start">...</div>
// <div class="d-flex align-items-end">...</div>
// <div class="d-flex align-items-center">...</div>
// <div class="d-flex align-items-baseline">...</div>
// <div class="d-flex align-items-stretch">...</div>