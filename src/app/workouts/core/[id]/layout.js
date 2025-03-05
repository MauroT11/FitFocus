import { supabase } from '../../../../utils/supabase';

export async function generateMetadata({ params }) {
    const { data, error } = await supabase
        .from('exercises')
        .select('*')
        .eq('slug', params.id)
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