import { useCV } from "../context/CVContext";

function FormPanel() {
    const { state, dispatch } = useCV();

    const handlePersonalChange = (e) => {
        dispatch({
            type: 'UPDATE_PERSONAL',
            payload: {
                field: e.target.name,
                value: e.target.value
            }
        });
    } ;

    const handleAddExperience = () => {
        dispatch({ type: 'ADD_EXPERIENCE' });
    };

    const handleAddEducation = () => {
        dispatch({ type: 'ADD_EDUCATION' });
    };

    return (
        <div>
            <h2>Заполните данные</h2>

            {/* ЛИЧНАЯ ИНФОРМАЦИЯ */}
            <section>
                <h3>Личная информация</h3>
                <div>
                    <label>ФИО:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={state.personalInfo.fullName}
                        onChange={handlePersonalChange}
                        placeholder="Фамилия Имя Отчество"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={state.personalInfo.email}
                        onChange={handlePersonalChange}
                        placeholder="name@example.com"
                    />
                </div>
                <div>
                    <label>Телефон:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={state.personalInfo.phone}
                        onChange={handlePersonalChange}
                        placeholder="+7 (900) 000-00-00"
                    />
                </div>
                <div>
                    <label>Желаемая должность:</label>
                    <input
                        type="text"
                        name="position"
                        value={state.personalInfo.position}
                        onChange={handlePersonalChange}
                        placeholder="Укажите должность"
                    />
                </div>
            </section>
            {/* ОБРАЗОВАНИЕ */}

            {/* ОПЫТ РАБОТЫ */}
            
        </div>
    )
}