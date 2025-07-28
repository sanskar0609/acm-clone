import React from 'react'
import MemberCard from './MemberCard'
import { Link } from 'react-router-dom'
import { CoreBoardMembers, StaffAdvisor } from '../jsdata/CoreBoardMembers'
import { FaArrowRight } from 'react-icons/fa'

function CoreBoard({ home }) {
	return (
		<div className='container flex flex-col items-center justify-center mx-auto'>
			<div id='officeBearers' className="flex items-center justify-center flex-wrap gap-8 mx-auto px-4">
				<div className="flex flex-col items-center w-fit">
					{home && <h1 data-aos="fade-up" className="pt-32 mb-8 sm:mb-14 w-min whitespace-nowrap font-extrabold text-center bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue text-transparent bg-clip-text leading-tight sm:leading-none uppercase text-4xl sm:text-5xl" >
						Office Bearers
					</h1>}
					{!home && <h2 data-aos='zoom-in' className="w-fit font-inter text-center bg-gradient-to-l from-blue-200 to-purple-400 text-transparent bg-clip-text font-bold text-3xl mb-6">Office Bearers</h2>}
					<MemberCard
						key={0}
						name={StaffAdvisor.name}
						post={StaffAdvisor.position}
						imageUrl={StaffAdvisor.profilePic}
						socialLinks={StaffAdvisor.socialHandles}
						showPost={true}
					/>
					<div className={`flex flex-wrap justify-center gap-10 ${home ? 'mt-10' : 'my-10'}`}>
						{CoreBoardMembers.map((member, memberIndex) => (
							<MemberCard
								key={memberIndex}
								name={member.name}
								post={member.position}
								imageUrl={member.profilePic}
								socialLinks={member.socialHandles}
								showPost={true}
							/>
						))}
					</div>
				</div>
			</div>
			{home &&
				<Link
					to="/board/main"
					onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
				>
					<button data-aos='zoom-out' type="button" className="text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-md sm:text-lg px-7 py-2 mt-8 sm:mt-14 text-center flex gap-2 items-center">See all members <FaArrowRight /> </button>
				</Link>}
		</div>
	)
}

export default CoreBoard;

