import { Link, useLocation } from 'react-router-dom';
import { FaRegUser, FaUsers, FaUserShield } from 'react-icons/fa6';

const BoardTabs = () => {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div className="w-full flex justify-center mb-8">
			{/* Wrapper for responsive width */}
			<div className="flex w-full max-w-5xl justify-center rounded-full px-4 py-2">

	                {/* Mentor Board */}
                    <div className="mx-2 lg:mx-10">
				<Link
					to="/board/main"
					className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r 
						from-purple-500/90 via-pink-500/90 to-red-500/90 hover:bg-gradient-to-l 
						uppercase font-montserrat font-bold transition-all duration-300 ease-in-out group 
						${path === '/board/main' ? 'border border-purple-500 bg-white/10' : 'border border-transparent'}`}>
					<FaUserShield className="text-purple-500 group-hover:text-red-500" />
					Mentor
				</Link>
            </div>
				{/* Executive Board */}
            <div className="mx-2 lg:mx-10">
				<Link
					to="/board/executive"
					className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r 
						from-purple-500/90 via-pink-500/90 to-red-500/90 hover:bg-gradient-to-l 
						uppercase font-montserrat font-bold transition-all duration-300 ease-in-out group 
						${path === '/board/executive' ? 'border border-red-500 bg-white/10' : 'border border-transparent'}`}>
					<FaRegUser className="text-red-500 group-hover:text-purple-500" />
					Main 
				</Link>
            </div>

            <div className="mx-2 lg:mx-10">
				{/* Executive */}
				<Link
					to="/board/advisory"
					className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r 
						from-purple-500/90 via-pink-500/90 to-red-500/90 hover:bg-gradient-to-l 
						uppercase font-montserrat font-bold transition-all duration-300 ease-in-out group 
						${path === '/board/advisory' ? 'border border-blue-500 bg-white/10' : 'border border-transparent'}`}>
					<FaUsers className="text-blue-500 group-hover:text-purple-500" />
					Executive
				</Link>
                </div>
			</div>
		</div>
	);
};

export default BoardTabs;
