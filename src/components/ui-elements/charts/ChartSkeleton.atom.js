const ChartSkeleton = () =>{
    return (
        <div className="p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 w-full h-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
            <div className="flex items-baseline mt-4 space-x-6 h-full w-full">
                <div className="w-full bg-gray-200 rounded-t-lg dark:bg-gray-700 h-3/4"></div>
                <div className="w-full bg-gray-200 rounded-t-lg dark:bg-gray-700 h-1/4"></div>
                <div className="w-full bg-gray-200 rounded-t-lg dark:bg-gray-700 h-5/6"></div>
                <div className="w-full bg-gray-200 rounded-t-lg dark:bg-gray-700 h-2/5"></div>
                <div className="w-full bg-gray-200 rounded-t-lg dark:bg-gray-700 h-1/2"></div>
                <div className="w-full bg-gray-200 rounded-t-lg dark:bg-gray-700 h-1/4"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

const LintSkeleton = () =>{
    return (
        <div role="status" className="animate-pulse w-full h-full">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-14 mb-10"></div>
            
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-5 w-8"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-36"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export {
    ChartSkeleton,
    LintSkeleton
}