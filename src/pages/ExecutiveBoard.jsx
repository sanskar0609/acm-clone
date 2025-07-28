import React from 'react'
import MemberCard from '../components/MemberCard'
import ExecutiveBoardMembers from '../jsdata/ExecutiveBoardMembers'
import BoardTabs from '../components/BoardTabs'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

function MainBoard() {
	const groupedByPosition = ExecutiveBoardMembers.reduce((acc, data) => {
		data.members.forEach(member => {
			const memberWithPosition = { ...member, position: data.position }
			if (!acc[data.position]) {
				acc[data.position] = []
			}
			acc[data.position].push(memberWithPosition)
		})
		return acc
	}, {})

	return (
		<div className="min-h-screen flex flex-col items-center">
			<div className="container mx-auto flex justify-center pt-24 pb-10">
				{/* <TeamsNav /> */}
				<BoardTabs /> 
			</div>
			<h1 data-aos='zoom-out' className="text-center text-4xl sm:text-5xl font-bold w-fit font-montserrat uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4d4d4d] via-[#ffffff] to-[#919191] drop-shadow-md">Main Board</h1>
			{/* <Link data-aos='zoom-out' to="/board/main" className="w-fit text-center text-base mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500/90 via-pink-500/90 to-red-500/90 hover:bg-gradient-to-l uppercase font-montserrat font-bold flex gap-1 items-center transition-all duration-300 ease-in-out group">
				<FaArrowLeftLong className="text-purple-500 group-hover:text-red-500" /> Main Board
			</Link> */}
			<div className="mt-14 container flex flex-col items-center justify-center flex-wrap gap-8 mx-auto px-4">
				{Object.entries(groupedByPosition).map(([position, members], posIndex) => (
					<div key={posIndex} className="flex flex-col items-center w-fit mb-14">
						<h2 data-aos='zoom-in' className="w-fit font-inter text-center bg-gradient-to-l from-blue-200 to-purple-400  text-transparent bg-clip-text font-extrabold text-3xl mb-6">{position}</h2>
						<div className="flex flex-1 flex-wrap lg:flex-nowrap justify-center gap-10">
							{members.map((member, memberIndex) => (
								<MemberCard
									key={memberIndex}
									name={member.name}
									post={member.position}
									imageUrl={member.profilePic}
									socialLinks={member.socialHandles}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default MainBoard;

