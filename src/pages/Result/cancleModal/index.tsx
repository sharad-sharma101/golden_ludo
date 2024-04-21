const CancleModal = () => {

    const CANCLE_OPTION = [
        {
            id: "101",
            text: "No Room Code",
        },
        {
            id: "102",
            text: "Room Code in Popular Mode",
        },
        {
            id: "103",
            text: "Game Not Started",
        },
        {
            id: "104",
            text: "Not Joined",
        },
        {
            id: "105",
            text: "Not Played",
        },
    ]

    return (
        <div className="mb-4">
            {
                CANCLE_OPTION.map((option) => (
                    <div className="flex items-center" key={option.id}>
                        <input 
                            id={option.id} 
                            type="radio" 
                            name="cancelReason" // group radio buttons by using the same name
                            value={option.id} // set value to the id or whatever value you need
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                        />
                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {option.text}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}

export default CancleModal
