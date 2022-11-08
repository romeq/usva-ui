import styles from "@/styles/Home/Home.module.scss"

export default function ErrorScreen(props: { error: Error | undefined; resetUpload: () => void }) {
    let err = props.error
    if (!err) err = Error("We are terribly sorry. Your upload failed for an unkonown reason.")
    console.log(err)
    return (
        <>
            <h2 className="title">{err.message}</h2>
            <p>
                Unfortunately we had some issues while preparing your upload for further processing. If this
                problem persists, please (please!) contact the developer for assistance.
            </p>
            <div className={styles.buttons}>
                <button className={[styles.button, styles.critical].join(" ")} onClick={props.resetUpload}>
                    Start over
                </button>
            </div>
        </>
    )
}