// set up supabase client with URL & KEY
const SUPABASE_URL = 'https://vmhclpevfecxhpxwubhs.supabase.co';

const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGNscGV2ZmVjeGhweHd1YmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5Nzk4MzgsImV4cCI6MTk2ODU1NTgzOH0.pWvGlCrbKNRZWBKDRsPR8rGxu8nodj7nq8cY1rPNglI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// write a fetch function for each of the 4 domains
export async function fetchMovies() {
    const response = await client.from('movies').select('*');
    console.log('response.data', response.data);
    return response.data;
}
