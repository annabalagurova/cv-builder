import { useCV } from "../context/CVContext";

function ExperienceInput({experienceItem}) {
    const { state, dispatch } = useCV();
    const handleChangeExperience = (e) => {
        dispatch({
            type: 'UPDATE_EXPERIENCE',
            payload: {
                id: experienceItem.id,
                field: e.target.name,
                value: e.target.value
            }
        });
    };
    return (
        <div>
            <div>
                <label>Организация</label>
                <input
                    type="text"
                    name="company"
                    value={experienceItem.company}
                    onChange={handleChangeExperience}
                    placeholder="Наименование организации"
                />
            </div>
            <div>
                <label>Должность</label>
                <input
                    type="text"
                    name="role"
                    value={experienceItem.role}
                    onChange={handleChangeExperience}
                    placeholder="Название должности"
                />
            </div>
            <div>
                <label>Годы работы</label>
                <input
                    type="text"
                    name="years"
                    value={experienceItem.years}
                    onChange={handleChangeExperience}
                    placeholder="Укажите годы работы"
                />
            </div>
        </div>
    );
}

export default ExperienceInput;