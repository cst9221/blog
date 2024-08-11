## 그래프 표현
인접 리스트 또는 인접 행렬로 표현할 수 있습니다. 인접 리스트가 더 일반적으로 사용됩니다.
## 방문 여부 표시
방문한 노드를 추적하기 위해 배열을 사용합니다.
## 재귀적 DFS 함수 작성
각 노드를 방문하고, 방문한 노드를 표시한 후, 해당 노드의 모든 인접 노드를 재귀적으로 방문합니다.


// iterative dfs
// https://chamdom.blog/dfs-using-js/
function dfs(graph, visited) {
    const stack = [[0, -1]];

    while (stack.length) {
        let [cur, parent] = stack.pop();

        if (visited[cur]) {
            continue;
        }

        stack.push([cur, parent]);
        visited[cur] = true;

        console.log(cur);

        for (const node of graph[cur]) {
            if (!visited[node]) stack.push([node, cur]);
        }
    }
}