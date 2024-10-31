import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function generateMetadata(id) {

    // console.log('id:', id.params.id);
    const { data, error } = await supabase
        .from('exercises')
        .select('*')
        .eq('id', id.params.id)
        .single();

    if (error) {
        console.error('Error fetching workout data:', error);
        return {};
    }

    return {
        title: `FitFocus - ${data.name}`,
        description: `${data.description}`,
    };

    
}

export default async function Shoulders({ children }) {
    return (
        <main>{children}</main>
    );
}