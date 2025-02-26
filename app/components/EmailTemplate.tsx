interface EmailTemplateProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    businessName: string;
    serviceInterest: string;
    message: string;
  };
}

export const EmailTemplate = ({ formData }: EmailTemplateProps) => ({
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #7D7ABC; color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
          .section { margin-bottom: 25px; }
          .section-title { color: #4A4773; font-size: 18px; font-weight: 600; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 2px solid #BDB8E3; }
          .field { margin-bottom: 15px; }
          .label { color: #666; font-size: 14px; }
          .value { color: #4A4773; font-size: 16px; margin-top: 3px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0;">New Consultation Request</h1>
          </div>
          <div class="content">
            <div class="section">
              <h2 class="section-title">Contact Information</h2>
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${formData.fullName}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${formData.phone || 'Not provided'}</div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Business Details</h2>
              <div class="field">
                <div class="label">Business Name</div>
                <div class="value">${formData.businessName || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Service Interest</div>
                <div class="value">${formData.serviceInterest}</div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Additional Information</h2>
              <div class="field">
                <div class="value">${formData.message || 'No additional information provided'}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}); 