import { Client, Databases, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const client=new Client()
 .setEndpoint("https://cloud.appwrite.io/v1")
 .setProject(PROJECT_ID);
const database=new Databases(client);
export const updateSearchCount=async(searchTerm,movie)=>{
try{
    const response=await database.listDocuments(DATABASE_ID,COLLECTION_ID, Query.equal("searchTerm", searchTerm));
    console.log("Document updated:", response);
    if(response.documents.length > 0) {
        const doc = response.documents[0];
        await database.updateDocument(DATABASE_ID,COLLECTION_ID,doc.$id,{
            count: doc.count + 1,
        });
    }else{
        await database.createDocument(DATABASE_ID,COLLECTION_ID,{
            searchTerm,
            movie_id: movie.id,
            count: 1,
            poster_url: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
        });
    }
}catch(error){
    console.error("Error updating document:", error);
}

}

export const getTrendingMovies = async (timeWindow = 'day') => {
    try{
        const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
         Query.limit(5),
         Query.orderDesc('count')
        ]);
        return response.documents;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}