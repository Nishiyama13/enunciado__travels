import connection from "../database/database.js";

async function findPassagersTravels(){
    return connection.query(
        `
            SELECT p."fullName", COUNT(p) as "viagens"  from passengers as p
            JOIN passenger_travels ON passenger_travels."passengerId" = p.id
            JOIN travels ON travels.id = passenger_travels."travelId"
            GROUP BY p."fullName" 
            ORDER BY "viagens" desc
            LIMIT 100;
        `
    )
}

async function findTravelsByName(name){
    return connection.query(
        `
            SELECT p."fullName", COUNT(p) as "viagens"  from passengers as p
            JOIN passenger_travels ON passenger_travels."passengerId" = p.id
            JOIN travels ON travels.id = passenger_travels."travelId"
            WHERE p."fullName" ILIKE '%' || $1 || '%'
            GROUP BY p."fullName" 
            ORDER BY "viagens" desc
        `,
        [name]
    )
}

async function getPassagersTravelsByPage(page){
    const limit = 25;
    const offset = (page - 1) * limit

    return connection.query(
        `
            SELECT p."fullName", COUNT(p) as "viagens"  from passengers as p
            JOIN passenger_travels ON passenger_travels."passengerId" = p.id
            JOIN travels ON travels.id = passenger_travels."travelId"
            GROUP BY p."fullName" 
            ORDER BY "viagens" desc
            LIMIT $1 
            OFFSET $2
        `,
        [limit, offset]
    )
}

export { findPassagersTravels, findTravelsByName, getPassagersTravelsByPage }