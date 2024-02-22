import React from 'react'

const NewsletterSignUp = () => {
  return (
    <div id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style>
        {`
          #mc_embed_signup {
            clear: left;
            font: 14px Helvetica, Arial, sans-serif;
          }

          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}
      </style>
      <div id="mc_embed_signup" className="">
        <form
          action="https://fsaeutoronto.us21.list-manage.com/subscribe/post?u=36fd2718405ffa6f16b7d4bd1&amp;id=282e32db41&amp;f_id=000be6e6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          style={{ padding: 0, margin: 0 }} // Add this style to remove padding
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <input
                type="email"
                name="EMAIL"
                className="required email border bg-transparent text-white border-white"
                id="mce-EMAIL"
                placeholder="example@gmail.com"
                required
                defaultValue=""
                style={{ padding: '0.5rem' }} // Add this style to adjust input padding
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_36fd2718405ffa6f16b7d4bd1_282e32db41"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent hidden">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                  value="Subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" type="text/javascript"></script>
      <script type="text/javascript">
        {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';
            ftypes[0]='email';
            fnames[1]='FNAME';
            ftypes[1]='text';
            fnames[2]='LNAME';
            ftypes[2]='text';
            fnames[3]='ADDRESS';
            ftypes[3]='address';
            fnames[4]='PHONE';
            ftypes[4]='phone';
            fnames[5]='BIRTHDAY';
            ftypes[5]='birthday';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);
        `}
      </script>
    </div>
  );
};

export default NewsletterSignUp;
