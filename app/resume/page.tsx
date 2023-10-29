import Icon from "../_components/Icon"
import styles from "./page.module.css"
import GithubMarkWhite from "@/public/image/github-mark-white.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <h1>최승태</h1>
          <h2>프론트엔드 엔지니어</h2>
        </div>

        <div>
          <ul>
            <li>
              {/* before */}
              <GithubMarkWhite />

              {/* after */}
              <Icon name="github-mark" />

              <a
                href="https://github.com/cst9221"
                target="#"
              >
                <span>Github</span>
              </a>
            </li>
            <li>2. github</li>
            <li>3. github</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
