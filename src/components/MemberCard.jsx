import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const MemberCard = ({ name, post, imageUrl, socialLinks, showPost }) => {
	return (
		<div data-aos="zoom-in-up" className="flex justify-center">
			<div className="max-w-[250px] min-h-fit group">
				<div className="card w-full h-full rounded-xl bg-neutral-600/25 backdrop-blur-md transition-all ease-in-out duration-500 transform-style-preserve-3d shadow-[rgba(0,0,0,0.2)_0px_5px_15px_-5px] flex flex-col overflow-hidden group-hover:rotate-y-[5deg] group-hover:rotate-x-[5deg] group-hover:border-purple-500 group-hover:shadow-[rgba(0,0,0,0.2)_5px_5px_20px_-5px]">
					<div className="content gap-4 p-3 flex flex-col items-center h-full">
						<img
							src={imageUrl || "/default.jpg"}
							alt="Profile"
							className="w-fit h-fit object-cover rounded-lg"
						/>
						<div className="space-y-1">
							<h3 className="title text-[#e0e0e0] font-bold text-lg text-center">{name}</h3>
							{showPost && <p className="designation text-[#e0e0e0] text-md text-center">{post}</p>}
						</div>
						<div className="bottom flex justify-center items-center">
							<div className="social-buttons-container flex gap-3 mb-4">
								{socialLinks?.linkedIn && (
									<a href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
										<FaLinkedinIn size={18} className="text-black" />
									</a>
								)}
								{socialLinks?.instagram && (
									<a href="https://www.instagram.com/wce_acm/" className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
										<FaInstagram size={18} className="text-black" />
									</a>
								)}
								{socialLinks?.github && (
									<a href={socialLinks.github} className="p-2 bg-zinc-200 rounded-full transition-all duration-200 hover:bg-sky-300" target="_blank" rel="noopener noreferrer">
										<FaGithub size={18} className="text-black" />
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MemberCard;