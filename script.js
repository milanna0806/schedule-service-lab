const SUPABASE_URL = 'https://jyfkohwmxklfckutuljm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_GfGh7WSMarzHpJ3ExHrJAA_70d6CRg-';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadSchedule() {
    const container = document.getElementById('schedule');
    
    try {
        const { data, error } = await supabaseClient.from('schedule').select('*');

        if (error) {
            container.innerHTML = `<p style="color:red">Ошибка Supabase: ${error.message}</p>`;
            console.error(error);
            return;
        }

        console.log('Данные из базы:', data);
        container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (e) {
        container.innerHTML = `<p style="color:red">Исключение: ${e.message}</p>`;
    }
}

loadSchedule();