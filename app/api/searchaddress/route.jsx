import {NextResponse} from "next/server"
const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request){
    const {searchParams}=new URL(request.url);
    const searchText=searchParams.get('q');
    const res=await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=10&session_token=0497d19c-ba1f-48c1-88ee-a02808e0f0d0&country=IN&access_token=pk.eyJ1IjoidmluYXlqYWRhdW4iLCJhIjoiY2x2MnF5MndzMGJqNDJtbXVyNW1ueDA1eSJ9.YzWJtp-XHVc9SkeFFN2KOA',{
        headers:{
            "Content-Type" : "application/json"
        }
    })
    
    const searchResult = await res.json();

    return NextResponse.json(searchResult)
}