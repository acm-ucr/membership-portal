import React from "react";
import { FaFileAlt, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Resource = ({ titles, documentLink, youtubeLink, githubLink }) => {
  return (
    <span className="rounded-3xl aspect-[1/1] w-full flex  bg-acm-white text-acm-white border-4 border-acm-black">
      <span className="relative -left-4 top-4 rounded-3xl aspect-[1/1] w-full block items-center bg-acm-black">
        <div className=" flex w-full flex-col h-full justify-between p-3 md:p-5">
          <div></div>
          <p className="text-center text-acm-blue font-lexend font-medium text-2xl">
            {titles}
          </p>
          <div className="flex items-center justify-center ">
            {documentLink && (
              <a
                href={documentLink}
                target="_blank"
                className="inline p-2"
                rel="noreferrer"
              >
                <FaFileAlt className="text-4xl text-acm-white hover:text-acm-blue" />
              </a>
            )}

            {youtubeLink && (
              <a
                href={youtubeLink}
                target="_blank"
                className="inline p-2"
                rel="noreferrer"
              >
                <FaYoutube className="text-4xl text-acm-white hover:text-acm-blue"></FaYoutube>
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="inline p-2"
                rel="noreferrer"
              >
                <FaGithub className="text-4xl text-acm-white hover:text-acm-blue"></FaGithub>
              </a>
            )}
          </div>
        </div>
      </span>
    </span>
  );
};

export default Resource;
