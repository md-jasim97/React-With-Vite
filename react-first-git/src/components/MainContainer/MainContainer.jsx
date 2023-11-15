import Cards from './Cards';
const MainContainer = () => {
    const cards = [
            {id: 1, Text :"This is a text 1"},
            {id: 2, Text :"This is a text 2"},
            {id: 3, Text :"This is a text 3"},
            {id: 4, Text :"This is a text 4"},
        ];
    
    return (
            <main>
                <div className="grid-Container">
                {
                    cards.map((card, index)=>(
                        <Cards key = {index} data = {card}/>
                    ))
                }
                </div>
            </main>
            );
    };
export default MainContainer;