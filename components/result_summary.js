import IconMemory from "@/assets/images/components/icon-memory"
import IconReaction from "@/assets/images/components/icon-reaction"
import IconVerbal from "@/assets/images/components/icon-verbal"
import IconVisual from "@/assets/images/components/icon-visual"

const BarComponent = ({icon, title, point, background, textColor}) => {
    return (
        <div className={`flex p-2 h-8 rounded-lg my-3 px-4 justify-between ${background} ${textColor}`}>
            <div className="">
                {icon} {title}
            </div>
            <div>
                {point} / 100
            </div>
        </div>
    )
}

export default function ResultSummary() {
    return (
        <div className="w-full h-parent flex justify-center items-center bg-white">
            <div className="flex h-box w-box bg-white drop-shadow-xl rounded-3xl">
                <div className="h-full w-1/2 rounded-3xl bg-gradient-to-t from-boxBottom to-boxTop">
                    <div className="flex h-full flex-col items-center justify-around">
                        <div>Your Result</div>
                        <div className="flex flex-col justify-center items-center w-circle h-circle rounded-full bg-gradient-to-b from-circleTop to-circleBottom">
                            <div>76</div>
                            <div>of 100</div>
                        </div>
                        <div>Great</div>
                        <div className="max-w-box text-para text-center">You scored higher than 65% of the people who have taken these tests.</div>
                    </div>
                </div>

                <div className="h-full w-1/2 rounded-3xl">
                    <div className="flex h-full flex-col m-border text-gray-900">
                        <div className="mb-2">Summary</div>
                        <div>
                            <BarComponent icon={<IconReaction />} title={'Reaction'} point={80} textColor="text-reaction" background="bg-reaction"/>
                            <BarComponent icon={<IconMemory />} title={'Memory'} point={92} textColor="text-memory" background="bg-memory"/>
                            <BarComponent icon={<IconVerbal />} title={'Verbal'} point={61} textColor="text-verbal" background="bg-verbal"/>
                            <BarComponent icon={<IconVisual />} title={'Visual'} point={72} textColor="text-visual" background="bg-visual"/>
                        </div>
                        <div className="rounded-full mt-5 flex h-8 bg-slate-600 text-white items-center justify-center">Continue</div>
                    </div>
                </div>
            </div>
        </div>
    )
}