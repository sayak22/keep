import React from "react";
import authorImg from "../images/sayak.png";

const Contact = () => {
  const author = {
    name: "Sayak Mondal",
    github: ["https://github.com/sayak22", "sayak22"],
    linkedin: [
      "https://www.linkedin.com/in/sayak22/",
      "sayak22",
    ],
    twitter: ["https://twitter.com/ig_d3monic", "ig_d3monic"],
    ig: ["https://www.instagram.com/ig_d3monic/", "ig_d3monic"],
    mail: ["mailto:sayakmondal2001@gmail.com", "sayakmondal2001@gmail.com"],
  };
  return (
    <>
      <div class="card">
        <div class="card-frame">
          <div class="card-box">
            <div class="card-head">
              <div class="card-image">
                <img src={authorImg} alt="author" />
              </div>
              <div class="card-name">{author.name}</div>
            </div>
            <div class="card-content">
              <div class="card-social">
                <div class="card-social-label">LinkedIn</div>
                <div class="card-social-content">
                  <a
                    href={author.linkedin[0]}
                    class="card-social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`@${author.linkedin[1]}`}
                  </a>
                </div>
              </div>
              <div class="card-social">
                <div class="card-social-label">GitHub</div>
                <div class="card-social-content">
                  <a
                    href={author.github[0]}
                    class="card-social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`@${author.github[1]}`}
                  </a>
                </div>
              </div>
              <div class="card-social">
                <div class="card-social-label">E-Mail</div>
                <div class="card-social-content">
                  <a
                    href={author.mail[0]}
                    class="card-social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`${author.mail[1]}`}
                  </a>
                </div>
              </div>
              <div class="card-social">
                <div class="card-social-label">Instagram</div>
                <div class="card-social-content">
                  <a
                    href={author.ig[0]}
                    class="card-social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`@${author.ig[1]}`}
                  </a>
                </div>
              </div>
              <div class="card-social">
                <div class="card-social-label">Twitter</div>
                <div class="card-social-content">
                  <a
                    href={author.twitter[0]}
                    class="card-social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`@${author.twitter[1]}`}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
