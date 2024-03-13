import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useLocalStroage from "./LocalStorage";

export default function ToggleButton() {
    const [check, setChecked] = useLocalStroage("theme", "dark")

    function handleToggleTheme() {
        setChecked(check === "light" ? "dark" : "light")
    }
    return (
        <div data-theme={check}>
            <div className='bg-white dark:bg-black text-black dark:text-white h-screen'>
                <div className='flex justify-center items-center'>
                    <h1 >React Toggle Button</h1>
                    <button onClick={handleToggleTheme}>{
                        check === "light"
                            ? <LightModeIcon />
                            : <DarkModeIcon />
                    }</button>
                </div>


                <h2 className='text-cyan-500 dark:text-sky-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima, vero eos tenetur exercitationem itaque amet distinctio alias fugit vitae animi atque omnis provident, soluta esse. Earum neque dolor dicta?</h2>
                <h2 className='text-purple-300 dark:text-purple-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima, vero eos tenetur exercitationem itaque amet distinctio alias fugit vitae animi atque omnis provident, soluta esse. Earum neque dolor dicta?</h2>
                <h2 className='text-yellow-500 dark:text-amber-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima, vero eos tenetur exercitationem itaque amet distinctio alias fugit vitae animi atque omnis provident, soluta esse. Earum neque dolor dicta?</h2>
                <h2 className='text-red-400 dark:text-red-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minima, vero eos tenetur exercitationem itaque amet distinctio alias fugit vitae animi atque omnis provident, soluta esse. Earum neque dolor dicta?</h2>

            </div>


        </div>
    )
}
