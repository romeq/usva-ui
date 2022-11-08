import { FileInitMeta } from "filehandler/upload"
import { motion } from "framer-motion"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import { FaTimes, FaEllipsisH, FaPlusCircle, FaArrowUp, FaRedoAlt } from "react-icons/fa"
import { FileUploadState } from "../FileUpload"
import IconByExtension from "../IconByExtension"
import styles from "@/styles/Home/Home.module.scss"

type UploadPreviewProps = {
    fileUploadState: FileUploadState
    fileMetas: FileInitMeta[]
    removeFile: (id: number) => void
    isLocked: boolean
    setOverviewShown: Dispatch<SetStateAction<boolean>>
    addFile: () => void
    uploadFiles: () => void
    resetForm: () => void
}

export function UploadPreview({
    fileUploadState,
    fileMetas,
    removeFile,
    isLocked,
    setOverviewShown,
    addFile,
    uploadFiles,
    resetForm,
}: UploadPreviewProps) {
    return (
        <>
            <p className="title">
                You {fileUploadState.uploaded ? "uploaded" : "have added"} {fileMetas.length} file
                {fileMetas.length > 1 && "s"}, which{" "}
                {fileMetas.length > 1 ? `${fileMetas.length <= 3 ? "are all" : `of 3 are`}` : `is`} shown
                below.
                <a onClick={resetForm} href="#" className="animated">
                    Reset
                </a>
            </p>

            {fileMetas.map((f, i) => {
                if (!f || i >= 3) return
                return (
                    <motion.div
                        animate={{
                            transform: fileMetas ? "scaleY(1)" : "scaleY(0)",
                        }}
                        key={i}
                        className={[styles.fileInfo, isLocked ? styles.disabled : ""].join(" ")}
                    >
                        <IconByExtension type={f.type} />
                        <span className={styles.filename}>
                            {f.filename.slice(0, 25) + (f.filename.length > 25 ? "..." : "")}
                        </span>
                        <span className={styles.size}>{f.size}</span>
                        <FaTimes
                            onClick={(e) => {
                                const x = e.currentTarget.parentElement
                                if (x) {
                                    x.style.transform = "scaleY(0)"
                                    x.style.opacity = "0"
                                }
                                setTimeout(() => {
                                    removeFile(i)
                                    if (x) x.style.opacity = "1"
                                }, 250)
                            }}
                            className={styles.close}
                        />
                    </motion.div>
                )
            })}

            <p className={styles.tosnt}>
                As you proceed you accept our <Link href="/terms-of-service">Terms</Link> and{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
            <div className={styles.buttons}>
                <div className={styles.icons}>
                    <button className={styles.icon} onClick={() => setOverviewShown(true)}>
                        <FaEllipsisH />
                    </button>

                    <button className={styles.icon} onClick={addFile}>
                        <FaPlusCircle />
                    </button>
                </div>

                <button
                    onClick={uploadFiles}
                    className={[styles.button, styles.primary, isLocked ? styles.disabled : ""].join(" ")}
                >
                    {fileUploadState.uploading ? (
                        <div className={styles.buttonProcessing}>
                            <span className={styles.uploading}>Your files are now uploading.</span>
                            <div className={styles.updown}>
                                <FaArrowUp />
                            </div>
                        </div>
                    ) : fileUploadState.uploaded ? (
                        <span>Upload done.</span>
                    ) : (
                        <span>Upload file{fileMetas.length > 1 ? "s" : ""}</span>
                    )}
                </button>
            </div>
        </>
    )
}

export function UploadFinished(props: {
    filename: string
    switchOverlay: (x: boolean) => void
    resetForm: () => void
}) {
    return (
        <>
            <h3 className="title">Congratulations, your upload was processed!</h3>
            <p>
                Thank you! Your files have now been processed and uploaded successfully. This means that you
                can now send your files forward. Just copy the link to your files below!
            </p>
            <input
                spellCheck={false}
                type="text"
                onSelect={(e) => e.currentTarget.select()}
                className={styles.manualcopylink}
                value={props.filename}
                onChange={() => {}}
            />

            <div className={styles.buttons}>
                <div className={styles.icons}>
                    <button onClick={() => props.switchOverlay(true)} className={styles.icon}>
                        <FaEllipsisH />
                    </button>
                </div>
                <button onClick={props.resetForm} className={styles.button}>
                    Upload a new file <FaRedoAlt />
                </button>
            </div>
        </>
    )
}
