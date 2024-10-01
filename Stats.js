export default function Stats({ items }) {
    if (!items.length) return <p 
        className="stats"> <em> let's Begin Filling Your Packing List 👉
        </em>
    </p>

    const noOfItems = items.length;
    const numOfPacked = items.filter(item => item.packed === true).length;

    const percentage = Math.round((numOfPacked / noOfItems) * 100);

    return (
        <footer className="stats" >
            <em>
                {percentage === 100 ? 'You got everything! Ready to go ✈️' : (
                    `You have ${noOfItems} items on Your list ,and you already packed ${numOfPacked} (${percentage}
            %)`
                )}
            </em>
        </footer >
    );
}


