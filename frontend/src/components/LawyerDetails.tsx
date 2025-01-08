import { lawyerDetailType } from "src/lib/slices/bookingDetails";

export function LawyerDetailsPage({val}:{val :  lawyerDetailType}) {
    return (
        <div>
            <div>
                Name : {val.name}
            </div>
            <div>
                Firm : {val.firm}
            </div>
            <div className="flex items-center ">
                Lawyer Type : {<div className="flex gap-[2px] text-sm">

                    {val.type.map((lawType, index) => {
                        return <div className="bg-gray-300 p-1 rounded-md" key={index}>{lawType}</div>
                    })}

                </div>}
            </div>
            <div>
                Fees : {val.cost} $
            </div>
        </div>
    )
}