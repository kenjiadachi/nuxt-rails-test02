require 'rails_helper'

RSpec.describe User, type: :model do

  let(:valid_user) { build(:user) }
  let(:invalid_user1) { build(:user, name: nil) }
  let(:invalid_user2) { build(:user, uid: nil) }
  let(:invalid_user3) { build(:user, email: nil) }

  describe 'validations' do

    context '通常ユーザーの場合' do
      subject { valid_user.valid? }
      it '保存されること' do
        expect(subject).to eq(true)
      end
    end

    context 'nameがないユーザーの場合' do
      subject { invalid_user1.valid? }
      it '保存されないこと' do
        expect(subject).to eq(false)
      end
    end

    context 'uidがないユーザーの場合' do
      subject { invalid_user2.valid? }
      it '保存されないこと' do
        expect(subject).to eq(false)
      end
    end

    context 'emailがないユーザーの場合' do
      subject { invalid_user3.valid? }
      it '保存されないこと' do
        expect(subject).to eq(false)
      end
    end
  end
end