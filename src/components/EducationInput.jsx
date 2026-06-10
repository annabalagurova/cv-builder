import { useCV } from "../context/CVContext";

function EducationInput({educationItem}) {
    const { state, dispatch } = useCV();
    const handleChangeEducation = (e) => {
        dispatch({
            type: 'UPDATE_EDUCATION',
            payload: {
                id: educationItem.id,
                field: e.target.name,
                value: e.target.value
            }
        });
    };
    return (
        <div>
            <div>
                <label>Учебное заведение</label>
                <input
                    type="text"
                    name="institute"
                    value={educationItem.institute}
                    onChange={handleChangeEducation}
                    placeholder="Название учебного заведения"
                />
            </div>
            <div>
                <label>Специальность</label>
                <input
                    type="text"
                    name="degree"
                    value={educationItem.degree}
                    onChange={handleChangeEducation}
                    placeholder="Специальность"
                />
            </div>
            <div>
                <label>Год окончания</label>
                <input
                    type="number"
                    name="year"
                    value={educationItem.year}
                    min="1900"
                    onChange={handleChangeEducation}
                />
            </div>
        </div>
    );
}

export default EducationInput;