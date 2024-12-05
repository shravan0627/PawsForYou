import React from 'react';

const BoardingServices = () => {
  return (
    <div className="boarding-container">
      <div className="boarding-header">
        <h1>BOARDING AND DAYCARE</h1>
      </div>
      
      <div className="contact-strip">
        <div className="email-contact">
          <i className="fa fa-envelope"></i>
          Reserve by Email: boarding@paws4you.org
        </div>
        <div className="phone-contact">
          <i className="fa fa-phone"></i>
          Reserve by Phone: (999) 999-9999
        </div>
      </div>

      <div className="boarding-content">
        <div className="boarding-text">
          <p>Thank you for entrusting us with your furry family member! Did you know that boarding your precious pet at our facility helps us save lives? PAWSforU is the first rescue to provide this service in South Florida. The proceeds from each stay directly support our mission to rescue and care for homeless animals.</p>
          
          <p>When you board your pet with us, you're not only supporting a great cause but also ensuring their safety and comfort. We require all pets to be up-to-date with vaccinations and provide each boarder with their own living quarters.</p>
        </div>

        <div className="policies-section">
          <div className="admission-policies">
            <h2>ADMISSION POLICIES</h2>
            <ul>
              <li>All dogs must be leashed</li>
              <li>Rabies, DHPP, Bordetella, and Heartworm must be current</li>
              <li>Food should be provided for your pet's stay</li>
              <li>Fee to administer medication is $8 per day</li>
              <li>A $50 deposit is required</li>
            </ul>
          </div>

          <div className="discharge-policies">
            <h2>DISCHARGE POLICIES</h2>
            <ul>
              <li>Check out time is by 12 PM</li>
              <li>Optional bath available before checkout ($20-$30)</li>
              <li>All charges must be paid in full at pickup</li>
            </ul>
          </div>
        </div>

        <div className="office-hours">
          <h2>OFFICE HOURS</h2>
          <p>Monday – Friday: 9 AM – 5 PM (closed 1-2 PM)</p>
          <p>Saturday: 9 AM – 2 PM</p>
          <p>Sunday: closed</p>
        </div>
      </div>
    </div>
  );
};

export default BoardingServices;