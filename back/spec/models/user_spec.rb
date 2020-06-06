require 'rails_helper'

RSpec.describe User, type: :model do

  let(:valid_user) { build(:user) }
  let(:invalid_user) { build(:user, name: nil) }

  describe 'validations' do

    context '通常ユーザーの場合' do
      subject { valid_user.valid? }
      it '保存されること' do
        expect(subject).to eq(true)
      end
    end

    context '名前がないユーザーの場合' do
      subject { invalid_user.valid? }
      it '保存されないこと' do
        expect(subject).to eq(false)
      end
    end
  end
end