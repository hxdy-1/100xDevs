import React from "react";

function RevenueCard({ title, showWarning, orderCount, amount }) {
	return (
		<div className="bg-white rounded shadow-md p-4 text-black">
			{/* <h3>Revenue Card</h3> */}
			<div className="text-left">{title}?</div>
			<div className="flex justify-between">
				<div className="font-semibold text-2xl">₹ {amount}</div>
				{orderCount ? (
					<div className="text-blue-500 flex underline cursor-pointer">
						{orderCount} order(s){" "}
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								//   fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
								color="blue-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m8.25 4.5 7.5 7.5-7.5 7.5"
								/>
							</svg>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default RevenueCard;
