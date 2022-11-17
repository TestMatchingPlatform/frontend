<template>
  <v-container>
    <div class="blank-5">
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center text-h5 font-italic">
            <span>
              정보화시대에 접어들면서, 우리는 많은 프로그램을 접하고 있습니다.
              <br />
              <br />
              <br />
              이러한 프로그램은 우리의 삶을 좀 더 풍요롭게 해주고,
              <br />
              우리의 일의 효율성을 더 높여주기도 합니다.
              <br />
              <br />
              <br />
              그래서 매년 만들어지는 프로그램의 수는 계속 증가하고 있습니다.
              <br />
              <br />
              <br />
              하지만 프로그램 상용화를 위해 테스터를 모집하는 방식에 대해서는
              <br />
              어떻게 이루어지고 있을까요?
              <br />
              <br />
              <br />
            </span>
            <span class="red--text font-weight-bold">
              ...
              <br />
              <br />
              <br />
              프로그램 테스터 모집 방식은 큰 문제점을 가지고 있습니다.
              <br />
            </span>
          </div>
        </v-col>
        <v-col cols="5" class="blank-5">
          <v-card>
            <v-row justify="center">
              <v-col cols="8">
                <v-img src="@/assets/maker_problem.png" class="fill-height">
                </v-img>
              </v-col>

              <v-col cols="12">
                <v-card-title class="justify-center">
                  <span class="text-h5 font-weight-bold"> 테스터 모집자 </span>
                  <span class="text-h5"> 는 이런 문제가 있습니다. </span>
                </v-card-title>
                <v-card-text
                  class="text-subtitle-1 pa-3 red--text text--accent-5"
                >
                  <v-row>
                    <v-col cols="1">
                      <span class="material-icons"> close </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        테스터를 모집하려면 공고를 내고, 신청자를 선발하는
                        절차를 수동으로 진행해야 합니다.
                      </div>
                    </v-col>
                    <v-col cols="1">
                      <span class="material-icons"> close </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        신청자의 인원이 부족하거나 너무 많은 경우, 지원자를
                        선발하는 기준을 정하기 어렵습니다.
                      </div>
                    </v-col>
                    <v-col cols="1">
                      <span class="material-icons"> close </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        프로그램 테스터에게 줄 수 있는 적절한 보상의 형태를
                        정하기 어렵고, 보상을 지급하지 못한 경우 처리가
                        힘듭니다.
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="5" class="blank-5">
          <v-card>
            <v-row justify="center">
              <v-col cols="8">
                <v-img src="@/assets/tester_problem.png" class="fill-height">
                </v-img>
              </v-col>
              <v-col cols="12">
                <v-card-title class="justify-center">
                  <span class="text-h5 font-weight-bold"> 테스터 </span>
                  <span class="text-h5"> 는 이런 문제가 있습니다. </span>
                </v-card-title>
                <v-card-text
                  class="text-subtitle-1 pa-3 red--text text--accent-5"
                >
                  <v-row>
                    <v-col cols="1">
                      <span class="material-icons"> close </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        테스터는 공모를 보고 신청서를 작성하게 되고 이 과정에서
                        선정 여부와 관계없이 개인정보가 노출됩니다.
                      </div>
                    </v-col>
                    <v-col cols="1">
                      <span class="material-icons"> close </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        테스트 모집자가 올린 공고에 몇명이 지원했는지, 본인에게
                        선정 가능성이 있는지 알 수 없습니다.
                      </div>
                    </v-col>
                    <v-col cols="1">
                      <span class="material-icons"> close </span>
                    </v-col>
                    <v-col cols="11">
                      <div>
                        개인 이메일 확인을 해야한다는 점과 연락이 오는 시점을 알
                        수 없어 선정된 경우에도 누락이 발생할 수 있습니다.
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12">
          <div class="text-center text-h4">
            <br />
            <br />
            <br />
            <span class="font-weight-bold teal--text text--accent-5">
              BM은 이러한 문제점을 해결할 수 있습니다.
            </span>
          </div>
        </v-col>

        <v-row justify="center" class="pa-5">
          <v-col cols="5" class="blank-5">
            <v-card>
              <v-row justify="center">
                <v-col cols="8">
                  <v-img src="@/assets/maker_introduce.png" class="fill-height">
                  </v-img>
                </v-col>

                <v-col cols="12">
                  <v-card-title class="justify-center">
                    <span class="text-h5 font-weight-bold"
                      >Maker로 시작하기</span
                    >
                    <span class="text-h5"> 는 이런 이점이 있습니다. </span>
                  </v-card-title>
                  <v-card-text
                    class="text-subtitle-1 pa-3 teal--text text--accent-5"
                  >
                    <v-row>
                      <v-col cols="1">
                        <span class="material-icons"> done </span>
                      </v-col>
                      <v-col cols="11">
                        <div>
                          플랫폼 내부에서 Tester를 선발하는 절차를 통해서 인력
                          낭비를 줄일 수 있습니다.
                        </div>
                      </v-col>
                      <v-col cols="1">
                        <span class="material-icons"> done </span>
                      </v-col>
                      <v-col cols="11">
                        <div>
                          수행인원 선정 시, 신청 인원들의 이전 수행에 대한
                          리뷰를 확인할 수 있습니다.
                        </div>
                      </v-col>
                      <v-col cols="1">
                        <span class="material-icons"> done </span>
                      </v-col>
                      <v-col cols="11">
                        <div>
                          Reward 제공을 플랫폼 내 재화로 통일하고, 그에 따라
                          리워드 지급을 간소화할 수 있습니다.
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="5" class="blank-5">
            <v-card>
              <v-row justify="center">
                <v-col cols="8">
                  <v-img
                    src="@/assets/tester_introduce.png"
                    class="fill-height"
                  >
                  </v-img>
                </v-col>
                <v-col cols="12">
                  <v-card-title class="justify-center">
                    <span class="text-h5 font-weight-bold"
                      >Tester로 시작하기</span
                    >
                    <span class="text-h5"> 는 이런 이점이 있습니다. </span>
                  </v-card-title>
                  <v-card-text
                    class="text-subtitle-1 pa-3 teal--text text--accent-5"
                  >
                    <v-row>
                      <v-col cols="1">
                        <span class="material-icons"> done </span>
                      </v-col>
                      <v-col cols="11">
                        <div>
                          테스터 모집 공모를 플랫폼 내부에서 보고 바로 신청할 수
                          있습니다.
                        </div>
                      </v-col>
                      <v-col cols="1">
                        <span class="material-icons"> done </span>
                      </v-col>
                      <v-col cols="11">
                        <div>
                          테스터 모집 시, 경쟁률을 파악해서 보다 선정이 잘 될 수
                          있는 테스트를 신청할 수 있습니다.
                        </div>
                      </v-col>
                      <v-col cols="1">
                        <span class="material-icons"> done </span>
                      </v-col>
                      <v-col cols="11">
                        <div>
                          플랫폼 재화인 Point를 지급 받고, 이를 현금으로
                          전환해서 자유롭게 사용할 수 있습니다.
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <br />
        <br />
        <br />
        <br />
        <br />
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
.blank-5 {
  padding-top: 5em;
  padding-button: 1em;
}
</style>
