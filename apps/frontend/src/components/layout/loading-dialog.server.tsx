// Byimaan

import BChatText from "@/components/common/AppText.server";;
import Loading from "@/components/common/Loading.server";
import { cn } from "@/lib/utils";

type Props = {
    className ?:string,
    children ?: React.ReactNode,
}

const AppLoading = ({className, children}: Props) => {

    className = className ? className : 'absolute inset-0 bg-transparent grid place-items-center backdrop-blur-[3px]'

    return (
        <div className={cn(className)}>
            <div className="loading-holder bg-white rounded-lg flex-col gap-4 items-center justify-center py-6 px-4 text-sm">

                <div className="flex justify-center gap-4">
                    <BChatText sizeInTailwind="text-2xl"/>
                    <Loading sizeInTW="size-6" borderWidthInTW="border-2"/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
};
export { AppLoading}