const SUPABASE_URL = 'sb_publishable_GfGh7WSMarzHpJ3ExHrJAA_7Od6CRg-';
const SUPABASE_KEY = 'sb_secret_3LKfUmD4mi1V_Q9IFK6wBw_SrIWb5FE';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadSchedule() {
    const container = document.getElementById('schedule');
    
    // Запрос к таблице schedule
    const { data, error } = await supabaseClient
        .from('schedule')
        .select('*');

    if (error) {
        container.innerHTML = `<p style="color:red">Ошибка загрузки: ${error.message}</p>`;
        return;
    }

    if (!data || data.length === 0) {
        container.innerHTML = '<p>Расписание пока пустое.</p>';
        return;
    }

    container.innerHTML = data.map(item => `
        <div class="item">
            <strong>${item.title || item.subject || 'Предмет'}</strong>
            <div>Время: ${item.time || '—'}</div>
            <div>Кабинет: ${item.room || '—'}</div>
        </div>
    `).join('');
}

loadSchedule();