export default function SuccessBox({children}) {
    return (
        <div className="text-center bg-green-100 p-2 rounded-lg border-2
        border-green-300">
            {children}
        </div>
    );
}