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
                {
                    cards.map((card)=>(
                        <Cards data = {card}/>
                    ))
                }
            </main>
            );
    };
export default MainContainer;