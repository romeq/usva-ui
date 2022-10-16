import Header from "@/components/Home/Header";
import styles from "@/styles/TextPages.module.scss"

export default function TermsOfService() {
    return <>
        <div className={styles.header}>
            <h1 className="title">Terms of Service</h1>
            <p className="description">
                Describes user's and server administrator's rights to this service and the proper
                use of this website.
            </p>
        </div>

        <div className={styles.section}>
            <div className={styles.content}>
                <h2 className="title">Acceptance of terms</h2>
                <p className="description">Describes what you will promise us by using this service.</p>

                <p className="description small">
                    Prohibited content include: <br />
                    - Any form of pornographic content <br />
                    - Copyrighted content, where uploader isn't authorized to be sharing given content <br />
                    - Personal information is limited to uploaders with proper authorization of their identity if needed.
                    <br /><br />
                    
                    When you accept the terms, you accept that: <br />
                    - Your IP Address (hashed with strong cryptographic algorithm) is linked to upload. <br />
                    - Uploads including any form of prohibited content (qualified above) is authorized to be
                    deleted by the action of server administrator at any time.
                </p>
            </div>

            <div className={styles.section}>
                <div className={styles.content}>
                    <h2 className="title">How users can manipulate their own data</h2>
                    <p className="description">Describes your (user) rights to manipulate your data saved to servers.</p>

                    <p className="description small">
                        There is, of course, changes to our way of acting touching specific area of mode of operation,
                        which also includes changes to our way of acting to user specific data. Though, each time there is some changes,
                        they are updated to our official website (both PDF and their abbreviation in landing page, located in the root of this website). <br /> <br />

                        We save IP Addresses of our content uploaders and downloaders to limit the amount of unwanted
                        abuse of our services. We have become aware of the fact that this service can
                        be in theory used for uploading illegal content as far as it's properly encrypted (we can NOT know what the files contain in that
                        point), so we have proceeded to offer a report feature which all users are responsible to use in case of prohibited content
                        (defined in the first section). In case of many reports to specific file the given file is deleted from our servers, and the IP Address linked to
                        the file is banned from uploading again for following 30 days. <br/> <br />

                        To delete all information linked to your upload (which include all forms of personal data defined above), you have the ability to delete the file.
                        In case the file is already deleted by administrator regarding the action of to prevent abuse, none of previously mentioned data
                        is deleted but saved for following thirty (30) days. This is because the server administrator is authorized to be in full control of data of the users who
                        have clearly abused this service. This is not discussable, because we are very strict of the
                        possible abuse of this service.
                    </p>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.content}>
                    <h2 className="title">How users can manipulate their own data</h2>
                    <p className="description">Describes your (user) rights to manipulate your (user) data saved to servers.</p>

                    <p className="description small">
                        There is, of course, changes to our way of acting touching specific area of mode of operation,
                        which also includes changes to our way of acting to user specific data. Though, each time there is some changes,
                        they are updated to our official website (both PDF and their abbreviation in landing page, located in the root of this website). <br /> <br />

                        We save IP Addresses of our content uploaders and downloaders to limit the amount of unwanted
                        abuse of our services. We have become aware of the fact that this service can
                        be in theory used for uploading illegal content as far as it's properly encrypted (we can NOT know what the files contain in that
                        point), so we have proceeded to offer a report feature which all users are responsible to use in case of prohibited content
                        (defined in the first section). In case of many reports to specific file the given file is deleted from our servers, and the IP Address linked to
                        the file is banned from uploading again for following 30 days. <br/> <br />

                        To delete all information linked to your upload (which include all forms of personal data defined above), you have the ability to delete the file.
                        In case the file is already deleted by administrator regarding the action of to prevent abuse, none of previously mentioned data
                        is deleted but saved for following thirty (30) days. This is because the server administrator is authorized to be in full control of data of the users who
                        have clearly abused this service. This is not discussable, because we are very strict of the
                        possible abuse of this service.
                    </p>
                </div>
            </div>
        </div>
    </>
}