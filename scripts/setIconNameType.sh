# 스크립트 시작
echo "Run Script '$0'\n"

# 빈 배열 선언
list=()

# 검색할 디렉토리 
search_dir=./app/_assets/icon
# 디렉토리 안에 있는 파일들은 배열로
files=("$search_dir/"*.svg)
# 배열의 길이
length=${#files[@]}

# 길이 만큼 반복
for((i=0; i<$length; i++)); do
  entry=${files[$i]}
  
  # / 기준으로 스플릿하여 string_array에 넣어주기
  # ex) the/path/to/svg => (the, path, to, svg)
  IFS='/' read -ra string_array <<< "$entry"
  
  name=${string_array[${#string_array[@]}-1]}

  # . 기준으로 스플릿하여 .svg 제거
  IFS='.' read -ra name <<< "$name"
  
  # 마지막이라면 "|" 생략
  if [ $i -eq $((length-1)) ]; then
    # string_array의 마지막 index값만 꺼내서 list에 붙이기
    list+="\"$name\""
  else
    list+="\"$name\" | "
  fi
done

# 넣어줄 ts 코드 생성
code='type IconName = '$list''
echo $code

# 파일 경로에 있는 iconName.ts파일에 덮어쓰기
echo "$code" > "./app/_types/iconName.ts"