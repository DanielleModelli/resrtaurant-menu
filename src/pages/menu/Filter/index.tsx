import filters from './filter.json';
import styles from './Filter.module.scss';

type IOption = typeof filters[0];

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}
export default function Filter( { filter, setFilter}: Props) {
    function selectFilter(option: IOption) {

    }
    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button className={styles.filters__filter} key={option.id} onClick={()=> selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    )
}