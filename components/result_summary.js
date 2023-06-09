import IconMemory from "@/assets/images/components/icon-memory"
import IconReaction from "@/assets/images/components/icon-reaction"
import IconVerbal from "@/assets/images/components/icon-verbal"
import IconVisual from "@/assets/images/components/icon-visual"

const BarComponent = ({icon, title, point, background, textColor}) => {
    return (
        <div className={`flex rounded-lg my-3 px-4 py-3 justify-between ${background}`}>
            <div className={`flex ${textColor}`}>
                <div className="mr-2 pt-0.5">{icon}</div>
                <div className="">{title}</div>
            </div>
            <div className="flex">
                <div className="font-semibold mr-2">{point}</div>
                <div className="text-percent">/ 100</div>
            </div>
        </div>
    )
}

export default function ResultSummary() {
    return (
        <div className="w-full flex justify-center items-center bg-white mobile:h-mobileContainer desktop:h-desktopContainer">
            <div className="flex bg-white drop-shadow-boxDrop rounded-3xl mobile:flex-col mobile:w-mobile mobile:h-mobile desktop:flex-row desktop:w-desktop desktop:h-desktop">
                <div className="rounded-3xl bg-gradient-to-t from-boxBottom to-boxTop desktop:h-full desktop:w-1/2 py-4">
                    <div className="flex h-full flex-col items-center justify-around mobile:h-mobileCard">
                        <div className="font-semibold text-result">Your Result</div>
                        <div className="flex flex-col justify-center items-center w-circle h-circle rounded-full bg-gradient-to-b from-circleTop to-circleBottom">
                            <div className="font-semibold text-6xl">76</div>
                            <div className="font-extralight text-result">of 100</div>
                        </div>
                        <div className="font-bold text-2xl">Great</div>
                        <div className="max-w-box text-base text-center font-extralight">You scored higher than 65% of the people who have taken these tests.</div>
                    </div>
                </div>

                <div className="rounded-3xl h-full mobile:w-full desktop:w-1/2">
                    <div className="flex h-full flex-col m-border text-gray-900">
                        <div className="font-semibold">Summary</div>
                        <div className="my-3">
                            <BarComponent icon={<IconReaction />} title={'Reaction'} point={80} textColor="text-reaction" background="bg-reaction"/>
                            <BarComponent icon={<IconMemory />} title={'Memory'} point={92} textColor="text-memory" background="bg-memory"/>
                            <BarComponent icon={<IconVerbal />} title={'Verbal'} point={61} textColor="text-verbal" background="bg-verbal"/>
                            <BarComponent icon={<IconVisual />} title={'Visual'} point={72} textColor="text-visual" background="bg-visual"/>
                        </div>
                        <div className="rounded-full mt-2 flex h-9 bg-boxContinue text-white items-center justify-center">Continue</div>
                    </div>
                </div>
            </div>
        </div>
    )
}