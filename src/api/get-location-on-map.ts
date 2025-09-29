import axios from "axios";
import { getPicsumImageUrl, getRandomImages } from "@/helpers/picsum-helper";

export async function getLocationOnMap(country: string) {
    try {
        // Use Lorem Picsum for random images instead of Unsplash
        const picsumLink = `https://picsum.photos/v2/list?page=1&limit=10`;
        
        const response = await axios.get(picsumLink);

        if (response.data && Array.isArray(response.data)) {
            // Transform Lorem Picsum data to match expected format
            return response.data.map((item: any, index: number) => ({
                id: item.id,
                urls: {
                    small: getPicsumImageUrl({ 
                        id: item.id, 
                        width: 400, 
                        height: 300,
                        random: index + 1
                    }),
                    regular: getPicsumImageUrl({ 
                        id: item.id, 
                        width: 800, 
                        height: 600,
                        random: index + 1
                    }),
                    full: getPicsumImageUrl({ 
                        id: item.id, 
                        width: 1920, 
                        height: 1080,
                        random: index + 1
                    })
                },
                alt_description: `Random image ${index + 1} for ${country}`,
                description: `Beautiful random image for ${country} tourist attraction`,
                user: {
                    name: item.author,
                    username: item.author.toLowerCase().replace(/\s+/g, '')
                }
            }));
        } else {
            throw new Error("No results found");
        }
    } catch (error) {
        console.error("Error fetching data from Lorem Picsum:", error);
        return [];
    }
}

/**
 * Get random images for a specific country using Lorem Picsum
 * This is a simpler alternative that doesn't require API calls
 */
export function getRandomImagesForCountry(country: string, count: number = 10) {
    return getRandomImages(count, {
        width: 800,
        height: 600
    }).map((url, index) => ({
        id: `random-${index + 1}`,
        urls: {
            small: url.replace('800/600', '400/300'),
            regular: url,
            full: url.replace('800/600', '1920/1080')
        },
        alt_description: `Random image ${index + 1} for ${country}`,
        description: `Beautiful random image for ${country} tourist attraction`,
        user: {
            name: 'Lorem Picsum',
            username: 'lorempicsum'
        }
    }));
}
